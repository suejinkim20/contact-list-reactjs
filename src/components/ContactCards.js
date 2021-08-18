import React from 'react';

const ContactCards = ({ contactList }) => {
    // contactList && console.log(contactList)
    if (!contactList) {
        return <h2> no users reported</h2>
    } else {
    
    return (
        <>
            {contactList?.map((contact, index) => (
                <figure key={index} className='bg-white h-100 rounded-lg shadow-md pt-7 pb-3 px-3'>
                    <img
                        alt='user'
                        className='w-32 h-32 rounded-full mx-auto'
                        src={contact.picture.large} />
                    <figcaption className='text-center mt-5'>
                        <p className='text-grey-600 font-semibold text-xl mb-2'>
                            {contact.name.first} {contact.name.last}
                        </p>
                        <p className='text-gray-500'>
                            <span className='font-medium'>email:</span> {contact.email}
                        </p>
                        <p className='text-gray-500'>
                        <span className='font-medium'>address:</span> {contact.location.street.number} {contact.location.street.name}
                        </p>
                        <p className='text-gray-500'>{contact.location.city}, {contact.location.state} </p>
                        <p className='text-gray-500'>
                    <span className='font-medium'>phone:</span> {contact.phone}</p>
                    </figcaption>
                </figure>

            ))}
        </>
    )}
}

export default ContactCards