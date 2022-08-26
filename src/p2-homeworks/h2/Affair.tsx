import React from 'react';
import {AffairType} from './HW2';
import s from './Affairs.module.css';

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id);
    };
    const priorityClass = `${s.text} ${s[props.affair.priority]}`;
    return (
        <div className={s.div}>
            <div className={s.text}>{props.affair.name}</div>
            <div className={priorityClass}>[{props.affair.priority}]</div>
            <button className={s.deleteButton} onClick={deleteCallback}>X</button>
        </div>
    );
}

export default Affair;
