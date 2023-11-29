import React, { useMemo } from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { useSelector } from 'react-redux'
import { themeSettings } from '@/theme.js'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import {
	Dashboard,
	Layout,
	Products,
	Customers,
	Transactions,
	Geography,
	Overview,
	Daily,
	Monthly,
	Breakdown,
	Admin,
	Performance,
} from '@/screens'

const App = () => {
	const mode = useSelector(s => s.global.mode)
	const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
	return (
		<div className='app'>
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Routes>
						<Route element={<Layout />}>
							<Route path='/' element={<Navigate to='/dashboard' replace />} />
							<Route path='/dashboard' element={<Dashboard />} />
							<Route path='/products' element={<Products />} />
							<Route path='/customers' element={<Customers />} />
							<Route path='/transactions' element={<Transactions />} />
							<Route path='/geography' element={<Geography />} />
							<Route path='/overview' element={<Overview />} />
							<Route path='/daily' element={<Daily />} />
							<Route path='/monthly' element={<Monthly />} />
							<Route path='/breakdown' element={<Breakdown />} />
							<Route path='/admin' element={<Admin />} />
							<Route path='/performance' element={<Performance />} />
						</Route>
					</Routes>
				</ThemeProvider>
			</BrowserRouter>
		</div>
	)
}

export { App }
