import React from 'react'
import Art from './Art'
import style from './ArtsGroup.module.scss'

export default function ArtsGroup() {
    return (
        <div className='d-flex align-items-center justify-content-between'>

            <div>
                <Art />
                <Art />
            </div>
            <div className='vr'></div>
            <div>
                <Art />
                <Art />
            </div>


        </div>
    )
}
