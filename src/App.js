import ContactCards from './components/ContactCards'

const App = () => {
  return (
    <div className='bg-gray-700'>
      <section>
        <form>
          <input
            type='text'
            className='ml-20 mt-6 rounded-md p-3'
            placeholder='type here to filter...'
          />
        </form>
      </section>

      <section className='p-20 grid sm:grid-cols-2 md:grid-cols-4 gap-6'>
        <ContactCards />
      </section>
    </div>
  );
}

export default App;
