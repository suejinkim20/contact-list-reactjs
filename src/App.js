import React, { useEffect, useState } from 'react';
import useFetch from 'react-fetch-hook'
import ContactCards from './components/ContactCards'

const App = () => {
  const url = 'https://randomuser.me/api/'
  const { isLoading, data, error } = useFetch(url+'?nat=us&results=20')

  const [contactList, setContactList] = useState('')
  const [filterQuery, setFilterQuery] = useState('')

  useEffect(() => {
    if (filterQuery) {
      // use filterQuery function
      const queryString = filterQuery.toLowerCase()

      const filteredData = data?.results?.filter((contact) => {
        const fullName = `${contact.name.first} ${contact.name.last}`
        
        if (queryString.length === 1) {
          //only finds the names that start with the input letter
          const firstLetter = fullName.charAt(0).toLowerCase()
          return firstLetter === queryString
        } else {
          //finds any name that includes the combination of letters typed into the input form
          return fullName.toLowerCase().includes(queryString)
        }

      })
      setContactList(filteredData)


    } else {
      // display all the data
      setContactList(data?.results)
    }
  }, [data, filterQuery])

  return (
    <div className={'bg-gray-600 font-sans tracking-wide'}>
      <section>
        <form>
          <input
            type={'text'}
            className={'ml-20 mt-6 rounded-md p-3'}
            placeholder={'type here to filter...'}
            onChange={(event) => setFilterQuery(event.target.value)}
          />
        </form>
      </section>

      <section className={'grid sm:grid-cols-2 lg:grid-cols-4 gap-6 p-20'}>
        <ContactCards contactList={contactList} />
      </section>
    </div>
  );
}

export default App;
