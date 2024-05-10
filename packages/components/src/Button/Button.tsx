'use client';
import React, {useEffect} from 'react'
import { bento } from 'tokens'

export const Button = ({...rest}: React.HTMLAttributes<HTMLButtonElement>) => {
	useEffect(() => {
		console.log('bento theme', bento.color.primary)
	}, [])
	return <button {...rest} onClick={() => console.log(bento)} />
}