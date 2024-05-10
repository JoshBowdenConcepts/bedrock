"use client"
import { Button } from "components";
import 'tokens/css/tokens.css'
import './index.css'
import { ThemeProvider, css, Theme } from '@emotion/react'
import { bento } from 'tokens'

const theme = bento;

function SomeText({children}: React.HTMLAttributes<HTMLParagraphElement>) {
	return (
		<p css={(theme: Theme) => css`
			[data-colormode="light"] & {
				// The numbers make this hard - how can we improve this w/o
				// ❌ no using t-shirt sizing
				color: ${theme.color.gray['600'].light}
			}
			[data-colormode="dark"] & {
				color: ${theme.color.gray['600'].dark}
			}
		`}>{children}</p>
	)
}

export default function Home() {
  return (
	<ThemeProvider theme={theme}>
		<main data-colormode="light" css={{
			background: 'var(--color-gray-100)',
			height: '100vh'
		}}>
			<Button>Hello</Button>
			<SomeText>some text</SomeText>
		</main>
	</ThemeProvider>
  );
}
