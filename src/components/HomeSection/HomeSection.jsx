
import { Avatar } from '@mui/material'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup'
import ImageIcon from '@mui/icons-material/Image'
import FmdGoodIcon from '@mui/icons-material/FmdGood'
import TagFacesIcon from '@mui/icons-material/TagFaces'
import Button from '@mui/material/Button'
import TweetCard from './TweetCard'
const validationSchema = Yup.object().shape({
    content: Yup.string().required('Tweet text is required')
})
const HomeSection = () => {
    const [uploadingImage, setuploadingImage] = useState(false);
    const [selectImage, setSelectedImage] = useState("");
    const handleSubmit = (values) => {
        console.log("values", values)
    }
    const formik = useFormik({
        initialValues: {
            content: "",
            image: ""
        },
        onSubmit: handleSubmit,
        validationSchema,
    })

    const handleSelectImage = (event) => {
        setuploadingImage(true);
        const imgUrl = event.target.files[0];
        formik.setFieldValue("image", imgUrl);
        setSelectedImage(imgUrl);
        setuploadingImage(false);
    }
    return (
        <div className='flex w-full'>
            <div className="flex flex-col w-full">
            <section>
                <h1 className='py-5 text-xl font-bold opacity-80'>Home </h1>
            </section>

            <section className={`pb-10`}>
                <div className='bg-gray-100 border rounded-lg p-5'>
                    <div className='w-full'>
                        <form onSubmit={formik.handleSubmit}>
                            <div className='flex flex-row'>
                    <Avatar alt="username"
                        src='https://tse3.mm.bing.net/th?id=OIP.1LxGsoIXmV41CY8s0UX5iAHaM0&pid=Api&P=0&h=180' />
                                <textarea type="text" name="content" placeholder='what is happening'
                               
                                    className={`border-gray-100 rounded-lg w-full outline-none text-xl ml-5 px-5`}
                                    {...formik.getFieldProps("content")} />
                                {formik.errors.content && formik.touched.content && (
                                    window.alert(formik.errors.content)
                                )}
                            </div>

                            <div className='flex justify-between items-center mt-5'>
                                <div className='flex space-x-5 items-center'>
                                    <label className="flex items-center space-x-2 rounded-md cursor-pointer ">

                                        <ImageIcon className="text-[#1d9bf0]" />
                                        <input type="file" name='imageFile' className='hidden' onChange={handleSelectImage} />
                                    </label>
                                    <FmdGoodIcon className="text-[#1d9bf0]" />
                                    <TagFacesIcon className="text-[#1d9bf0]" />

                                </div>
                                <div>
                                    <Button sx={{ width: "100%", borderRadius: "20px", paddingY: "8px", paddingX: "20px", bgcolor: '#38bdf8' }}
                                        variant='contained'>
                                        Tweet
                                    </Button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>

            </section>
            <section>
                {[1, 1, 1, 1, 1].map((item) => <TweetCard />)}
            </section>
            </div>
        </div>
    )
}

export default HomeSection
