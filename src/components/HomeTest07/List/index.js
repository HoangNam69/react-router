import './style.css'
// import { useMemo } from 'react';

const List = ({lists, onEdit, confirmModal}) => {

    return (
        <div  className="row">
            {lists.map((a) => {
                        return (
                            <div key={a.id} className="col-4">
                                <div className="user ">
                                    <div>
                                        Name: {a.name}
                                    </div>
                                    <div>
                                        Phone: {a.phone}
                                    </div>
                                    <div>
                                        <div>
                                            <button className='btn btn-info'onClick={() => {
                                                onEdit(a)
                                            }}>Edit</button>
                                            <button className='btn btn-danger' onClick={() => {
                                                confirmModal(a.id)
                                            }}>Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
        </div>
    )
}

export default List;