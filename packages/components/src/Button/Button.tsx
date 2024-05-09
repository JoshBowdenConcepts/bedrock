'use client';
import React from 'react'
import { bento } from 'tokens'

export const Button = ({...rest}: React.HTMLAttributes<HTMLButtonElement>) => {
	console.log('bento theme', bento.color.primary)
	return <button {...rest} onClick={() => console.log(bento)} />
}