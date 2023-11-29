import React from 'react'
import { Box, useTheme } from '@mui/material'
import { useGetAdminsQuery } from '@/store/api'
import { DataGrid } from '@mui/x-data-grid'
import { Header } from '@/components'

const Admin = () => {
	const theme = useTheme()
	const { data, isLoading } = useGetAdminsQuery()

	const columns = [
		{
			field: '_id',
			headerName: 'ID',
			flex: 1,
		},
		{
			field: 'name',
			headerName: 'Name',
			flex: 1,
		},
		{
			field: 'email',
			headerName: 'Email',
			flex: 1,
		},
		{
			field: 'phoneNumber',
			headerName: 'Phone number',
			flex: 1,
			renderCell: params => {
				return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, '($1)$2-$3')
			},
		},
		{
			field: 'country',
			headerName: 'Country',
			flex: 1,
		},
		{
			field: 'occupation',
			headerName: 'Occupation',
			flex: 1,
		},
		{
			field: 'role',
			headerName: 'Role',
			flex: 1,
		},
	]

	return (
		<Box m='1.5rem 2.5rem'>
			<Header title='ADMINS' subtitle='Managing admins and list of admins' />
			<Box
				mt='20px'
				height='75vh'
				sx={{
					'& .MuiDataGrid-root': {
						border: 'none',
					},
					'& .MuiDataGrid-cell': {
						borderBottom: 'none',
					},
					'& .MuiDataGrid-columnHeaders': {
						backgroundColor: theme.palette.background.alt,
						color: theme.palette.secondary[100],
						borderBottom: 'none',
					},
					'& .MuiDataGrid-virtualScroller': {
						backgroundColor: theme.palette.primary.light,
					},
					'& .MuiDataGrid-footerContainer': {
						backgroundColor: theme.palette.background.alt,
						color: theme.palette.secondary[100],
						borderTop: 'none',
					},
					'& .MuiDataGrid-toolbarContainer .MuiButton-text': {
						color: `${theme.palette.secondary[200]} !important`,
					},
				}}
			>
				<DataGrid
					loading={isLoading || !data}
					getRowId={row => row._id}
					rows={data || []}
					columns={columns}
				/>
			</Box>
		</Box>
	)
}

export { Admin }
