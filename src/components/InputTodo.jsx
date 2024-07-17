const index={
  backgroundColor: "#c6e5d9",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
}


export const InputTodo=(props)=>{
    const {todoText,onChange,onClick,disabled}=props;
    return(
        <div index={index}>
                <input disabled={disabled} placeholder="TODO入力"
                value={todoText} 
                onChange={onChange}
             />
            <button  disabled={disabled} onClick={onClick}>追加</button>
        </div>
    );
};