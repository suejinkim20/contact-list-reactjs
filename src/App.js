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
    } else {
      // display all the data
      setContactList(data?.results)
    }
  }, [data, filterQuery])

  return (
    <div className={'bg-gray-700 font-sans tracking-wide'}>
      <section>
        <form>
          <input
            type={'text'}
            className={'ml-20 mt-6 rounded-md p-3'}
            placeholder={'type here to filter...'}
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
