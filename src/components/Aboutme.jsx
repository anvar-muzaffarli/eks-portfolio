import React from 'react'

const Aboutme = () => {
  return (
    <div className='container py-5'>
        <div className="row">
            <div className="col-lg-6 col-xm-12">
                <div className="photo-wrap mb-5">
                    <img src="https://source.unsplash.com/random" alt='Elshan Mirzayev'  className='profile-img'/>
                </div>
            </div>

            <div className="col-lg-6 col-xm-12">
                <h1 className="about-heading">About me</h1>
                <p className='t-a-j'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut deleniti repudiandae voluptatibus repellendus facere molestias ab, quo itaque veritatis aspernatur ipsum, ducimus reiciendis cumque? Eveniet nihil quaerat tenetur. Cumque dolorum est nihil id ipsam minus enim. Perferendis harum quis itaque fugiat, fugit laboriosam sunt placeat.</p>
            </div>
        </div>
    </div>
  )
}

export default Aboutme