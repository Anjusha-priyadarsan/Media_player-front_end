import { BASE_URL } from "./baseUrl";
import { commomRequest } from "./commonRequest";

// api call for add video

export const addVideo=async(body)=>{
 return  await  commomRequest("POST",`${BASE_URL}/videos`,body)

}


// get video

export const getVideo=async()=>{
    return  await  commomRequest("GET",`${BASE_URL}/videos`,"")
   
   }

// Delete video card

export const deleteVideo=async(id)=>{
    return  await  commomRequest("DELETE",`${BASE_URL}/videos/${id}`,{})
   
   }
   
// Add category

export const addCategory=async(body)=>{
    return  await  commomRequest("POST",`${BASE_URL}/categories`,body)
   
   }

// to get category

export const getAllCategory=async()=>{
    return  await  commomRequest("GET",`${BASE_URL}/categories`,"")
   
   }

//To  Delete Category

export const deleteCategory=async(id)=>{
    return  await  commomRequest("DELETE",`${BASE_URL}/categories/${id}`,{})
   
   }

//    get history

export const getHistory=async()=>{
    return  await  commomRequest("GET",`${BASE_URL}/watchHistory`,"")
}

// add history

export const addHistory=async(body)=>{
    return  await  commomRequest("POST",`${BASE_URL}/watchHistory`,body)
}

// get details of draged video


export const getVideos=async(id)=>{
    return  await  commomRequest("GET",`${BASE_URL}/videos/${id}`,{})
   
   }

//    to update draged details in category allvideos[]


export const updateCategory=async(id,body)=>{
    return  await  commomRequest("PUT",`${BASE_URL}/categories/${id}`,body)
   
   }






