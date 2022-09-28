import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from '../Todo.module.css';

const List = ({
  editBtnHandler,
  itemDeleteHandler,
  isDoneHandler,
  data,
  cancelBtnHandler,
  editInputHandler,
  editSaveHandler,
}) => {
  const list = data;
  const listItems = list.map((task, index) => {
    return (
      <li key={index} className={styles.display}>
        {task.isEdit && (
          <Input
            value={task.editedItem}
            handleChange={(e) => editInputHandler(e, index)}
          />
        )}

        {!task.isEdit && (
          <div className={task.isDone ? styles.itemDone : ''}>{task.item}</div>
        )}

        {task.isEdit && (
          <>
            <Button
              btnText='Save'
              handleClickBtn={() => editSaveHandler(index)}
            />
            <Button
              btnText='Cancel'
              handleClickBtn={() => cancelBtnHandler(index)}
            />
          </>
        )}

        {!task.isEdit && (
          <Button btnText='Edit' handleClickBtn={() => editBtnHandler(index)} />
        )}

        {task.isDone && (
          <Button
            btnText='Delete'
            handleClickBtn={() => {
              itemDeleteHandler(index);
            }}
          />
        )}

        {!task.isDone && !task.isEdit && (
          <Button
            btnText='Done'
            handleClickBtn={() => {
              isDoneHandler(index);
            }}
          />
        )}
      </li>
    );
  });

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ul>{listItems}</ul>
      </div>
    </>
  );
};

export default List;
