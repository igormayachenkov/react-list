import create from 'zustand'

const useStore = create((set,get) => ({
    title : "Functional Zustand",
    list:[
        {id:1, name:'one',  checked:false},
        {id:2, name:'two',  checked:false},
        {id:3, name:'three',checked:false},
        {id:4, name:'four', checked:false},
        {id:5, name:'five', checked:false}
    ],
    onItemClick: (id)=>{
        console.log(`onItemClick #${id}`)
        // Toggle item checked
        let newList = get().list.map(
            (item) => (item.id === id) ? {...item, checked:!item.checked} : item
        )
        // Update state
        set({list:newList})
    }
}))

export default useStore