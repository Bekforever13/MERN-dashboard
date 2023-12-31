import React from 'react'
import { Box } from '@mui/material'
import { Header } from '@/components'
import { BreakdownChart } from '@/components'

const Breakdown = () => {
	return (
		<Box m='1.5rem 2.5rem'>
			<Header title='BREAKDOWN' subtitle='Breakdown of Sales By Category' />
			<Box mt='20px' height='75vh'>
				<BreakdownChart />
			</Box>
		</Box>
	)
}

export { Breakdown }
