import React, { useState } from 'react'
import { FormControl, MenuItem, InputLabel, Box, Select } from '@mui/material'
import { Header, OverviewChart } from '@/components'

const Overview = () => {
	const [view, setView] = useState('units')
	return (
		<Box m='1.5rem 2.5rem'>
			<Header
				title='Overview'
				subtitle='Overview of general revenue and profit'
			/>
			<Box height='70vh'>
				<FormControl sx={{ mt: '1rem' }}>
					<InputLabel>View</InputLabel>
					<Select
						value={view}
						label='View'
						onChange={e => setView(e.target.value)}
					>
						<MenuItem value='sales'>Sales</MenuItem>
						<MenuItem value='units'>Units</MenuItem>
					</Select>
				</FormControl>
				<OverviewChart isDashboard view={view} />
			</Box>
		</Box>
	)
}

export { Overview }
