import useFetch from 'react-fetch-hook'
import ContactCards from './components/ContactCards'

const App = () => {
  const url = 'https://randomuser.me/api/'
  const { isLoading, data, error } = useFetch(url+'?results=40')
  data && console.log(data)


  return (
    <div className={'bg-gray-700'}>
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
        <ContactCards />
      </section>
    </div>
  );
}

export default App;
