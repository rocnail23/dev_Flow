'use server';

import User from '@/database/user.model';
import { connectToDatabase } from '../mongoose';
import { CreateUserParams, DeleteUserParams, UpdateUserParams } from './shared.types';
import { revalidatePath } from 'next/cache';
import Question from '@/database/question.model';

export async function getUserByID(params:any) {
  try {
    await connectToDatabase();

    const { userId } = params;

    const user = await User.findOne({ clerkId: userId });
   
    console.log(user)
    return user;
  } catch (error) {
    console.error(`❌ ${error} ❌`);
    throw error;
  }
}

export async function createUser(params:CreateUserParams){

  const {clerkId,email,name,picture,username} = params
  await connectToDatabase()

  const user = await User.create({clerkId,email,name,picture,username})

  if(user){
   return user
  }

  console.log("user no creado")

}


export async function updateUser(params:UpdateUserParams){

  const {clerkId,path,updateData} = params

  await connectToDatabase()

  const user = await User.findOneAndUpdate({clerkId},updateData,{new:true})
  if(user){
   
    revalidatePath(path)
    return user
  }
   

  

  
}

export async function deleteUser(params:DeleteUserParams){

  const {clerkId} = params

  const user = await User.findOne({clerkId})
  
  // const QuestionsId = await Question.findOne({author:user._id}).distinct("_id")

   await Question.deleteMany({author:user._id})

    const  deletedUser = await User.findByIdAndDelete(user._id)

    return deletedUser

}