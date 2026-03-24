const express=require("express")
const router=express.Router()
const Book=require("../models/Book")

router.get("/books",async(req,res)=>
{
    const books=await Book.find();
    res.json(books)
})
router.post("/books",async(req,res)=>
{
    const book=new Book(req.body)
    await book.save()
    res.json(book)
})
router.delete("/books/:id",async(req,res)=>
{
        await Book.findByIdAndDelete(req.params.id)
        res.json({message:"Book deleted"})
})
module.exports=router