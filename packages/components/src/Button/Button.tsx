'use client';
import React, {useEffect} from 'react'
import { bento } from 'tokens'

export const Button = ({...rest}: React.HTMLAttributes<HTMLButtonElement>) => {
	useEffect(() => {
		console.log('bento theme', bento.color.primary)
	}, [])
	return <button style={{
		padding: 'var(--spacing-spacing400) var(--spacing-spacing800)',
		background: 'var(--color-primary-400)',
		color: 'var(--color-gray-100)',
		border: 'none'
	}} {...rest} />
}