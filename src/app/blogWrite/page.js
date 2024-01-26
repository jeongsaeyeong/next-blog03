"use client"
import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function page() {
    const [title, setTitle] = useState("");
    const [cateSlug, setCateSlug] = useState("");
    const [desc, setDesc] = useState("");

    const handleSubmit = async () => {
        const res = await fetch("/api/blogWrite", {
            method: "POST",
            body: JSON.stringify({
                title: title,
                desc: title,
                img: title,
                slug: title,
                cateSlug: cateSlug || "javascript",
            })
        })

        if (res.status === 200) {
            const data = await res.json();
            console.log(data)
        }
    }

    return (
        <main id='main'>
            <div className="main__header">
                <h2>#BLOGWrite</h2>
            </div>
            <div className='main__contents'>
                <div className='blog__write container'>
                    <div className='write_picture'></div>
                    <div className='box'>
                        <div className='input'>
                            <input className='title' type='text' placeholder='제목' onChange={(e) => setTitle(e.target.value)} />
                            <select onChange={(e) => setCateSlug(e.target.value)}>
                                <option value="javascript">javascript</option>
                                <option value="jqeury">jqeury</option>
                                <option value="html">html</option>
                                <option value="css">css</option>
                                <option value="react">react</option>
                                <option value="vue">vue</option>
                                <option value="next">next</option>
                            </select>
                        </div>
                        <button onClick={handleSubmit}>
                            저장하기
                        </button>
                    </div>

                    <ReactQuill
                        value={desc}
                        onChange={setDesc}
                        placeholder='글을 작성해 주세요!'
                    />
                </div>
            </div>
        </main>
    )
}
