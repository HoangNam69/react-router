/*
--- Tạo một mảng object
--- Form để nhập id, name và phone
--- Thực hiện đầy đủ tính năng thêm xóa sửa
*/
// useEffect,
import { useState, useMemo, useEffect } from "react";
import Form from "./Form";
import List from "./List";
import "./style.css";

import { getUsers, createUser, editUser, deleteUser} from '../../apis/users';
import Confirm from "./Confirm";

const DEFAULT_Item = { name: "", phone: "" };

// const validate = (lists, item) => {

//   if (item.name === '' || item.phone === '')
//   {
//     return false
//   }

//   //Create
//   if (!item.id)
//   {
//     const newItem = lists.find((items) => {
//       return items.name === item.name || items.phone === item.phone
//     })

//     return newItem ? false : true 
//   }
//   //Edit
//   if (item.id)
//   {
//     const newItem = lists.find((items) => {
//       return items.id !== item.id && (items.name === item.name || items.phone === item.phone)
//     })

//     return newItem ?  false : true 
//   }

//   return false;
// }

const HomeTest07 = () => {
  const [search, setSearch] = useState('')
  const [lists, setLists] = useState([]);
  const [item, setItem] = useState(DEFAULT_Item);
  const [selectedId, setSelectedId] = useState(null)
  // const [resultSearch, setResultSearch] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    getUsers().then((response) => {
      setLists(response.data)
    })
    .catch((error) => {
      console.log(error);
    });
  }
  const onChange = (ev) => {
    const name = ev.target.name;
    const value = ev.target.value;

    setItem({
      ...item,
      [name]: value
    });
  };
  const onSubmit = () => {

    // const isValidate = validate(lists, item)

    // if (isValidate){ 
      //Create
      if (!item.id) {
        createUser(item).then((response) => {
          fetchData()
          setItem(DEFAULT_Item)
        }).catch((error) => {
          console.log(error)
        })
      }
      //Edit
      if (item.id) {
        editUser(item.id, item).then((response) => {
          fetchData()
          setItem(DEFAULT_Item)
        }).catch((error) => {
          console.log(error)
        })
        fetchData()
      }
    // }

    const element = document.querySelector('#exampleModal')
    const modal = window.bootstrap.Modal.getOrCreateInstance(element)
    modal.hide()
  };
  const onEdit = (data) => {
    setItem(data);

    const element = document.querySelector('#exampleModal')
    const modal = window.bootstrap.Modal.getOrCreateInstance(element)
    modal.show()
  };
  const confirmModal = (id) => {

    setSelectedId(id)
    const element = document.querySelector('#confirmModal')
    const modal = window.bootstrap.Modal.getOrCreateInstance(element)
    modal.show()
  };
  const onDelete = () => {
    deleteUser(selectedId).then((response) => {
      fetchData()
    }).catch((error) => {
      console.log(error)
    })
    fetchData()

    const element = document.querySelector('#confirmModal')
    const modal = window.bootstrap.Modal.getOrCreateInstance(element)
    modal.hide()
  };
  const onSearch = (e) => {
    const value = e.target.value;
    setSearch(value)
  };

  // useEffect(() => {
  //   if (search)
  //   {
  //     const newList = lists.filter((item) => {
  //       return item.name.includes(search) || item.phone.includes(search)
  //     })

  //     setResultSearch(newList)
  //   } else {
  //     setResultSearch(lists)
  //   }
  // }, [search, lists])
  const resultSearch = useMemo(() => {
    if (search)
    {
      const newResultSearch = lists.filter((item) => {
        return item.name.includes(search) || item.phone.includes(search)
      })

      return newResultSearch
    }

    return lists
  }, [search, lists]);

  return (
    <div className="font background">
      <header className="header row">
        <h4 className="col-7" s>
          User
        </h4>
        <div className="col-3">
          <input
            value={search}
            type="text"
            className="form-control"
            placeholder="Type to search..."
            onChange={onSearch}
          />
        </div>
        {/* Button trigger modal */}
        <div className="col-2">
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={() => {
              setItem(DEFAULT_Item);
            }}
          >
            Create User
          </button>
        </div>
      </header>
      <div className="layout">
        <div>
          <Form
            onSubmit={onSubmit}
            onChange={onChange}
            item={item}
            onDelete={onDelete}
            lists={lists}
          />
        </div>
        {resultSearch.length === 0 && <div>No data found</div>}
        <div>
          <List lists={resultSearch} setLists={setLists} onEdit={onEdit} confirmModal={confirmModal}/>
        </div>
        <div>
          <Confirm onDelete={onDelete} />
        </div>
      </div>
    </div>
  );
};

export default HomeTest07;
