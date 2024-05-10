'use client';
import React, {useEffect} from 'react'
import { bento } from 'tokens'

export const Button = ({...rest}: React.HTMLAttributes<HTMLButtonElement>) => {
	useEffect(() => {
		console.log('bento theme', bento.color.primary)
	}, [])
	return <button style={{
		padding: 'var(--spacing-spacing400) var(--spacing-spacing800)',
		background: 'var(--color-primary-200)',
		color: 'var(--color-primary-500)',
		border: 'none'
	}} {...rest} />
}