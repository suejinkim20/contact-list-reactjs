const ContactCards = () => {
    return (
        <div>
            <figure className='bg-white h-80 rounded-lg shadow-md pt-7'>
                <img
                    alt='user'
                    className='w-32 h-32 rounded-full mx-auto'
                    src='https://randomuser.me/api/portraits/women/40.jpg' />
                <figcaption className='text-center mt-5'>
                    <p className='text-grey-700 font-semibold text-xl mb-2'>
                        name
                    </p>
                    <p className='text-gray-500'>
                        <span className='font-medium'>email:</span> contact.email
                    </p>
                    <p className='text-gray-500'>
                        <span className='font-medium'>address:</span> contact.address
                    </p>
                    <p className='text-gray-500'>
                        <span className='font-medium'>phone:</span> contact.phone</p>
                </figcaption>
            </figure>
        </div>
    )
}

export default ContactCards