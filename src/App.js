import Header from './Header';
import Content from './Content';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import Footer from './Footer';
import { useState, useEffect } from 'react';

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')) || [])
  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')

  // []를 붙이게 되면 어떤 조건이 실행되면 작동한다
  useEffect(() => {
    localStorage.setItem('shoppinglist', JSON.stringify(items))
  }, [items])

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1
    const myNewItem = { id, checked: false, item }
    const listItems = [...items, myNewItem]
    setItems(listItems)
  }

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item)
    setItems(listItems)
  }


  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id)
    setItems(listItems)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newItem) return
    addItem(newItem)
    setNewItem('')
  }

  const handleSearch = (e) => {
    e.preventDefault()
  }

  return (
    <div className="App">
      <Header title='Grocery List' />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      <Content
        items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        setItems={setItems}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer
        length={items.length}
      />
    </div>
  )
}

export default App;
