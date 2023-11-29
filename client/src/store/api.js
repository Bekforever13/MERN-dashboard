import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
	reducerPath: 'adminApi',
	tagTypes: [
		'User',
		'Products',
		'Customers',
		'Transactions',
		'Geography',
		'Sales',
		'Admins',
		'Performance',
		'Dashboard',
	],
	endpoints: build => ({
		getUser: build.query({
			query: id => `general/user/${id}`,
			providesTags: ['User'],
		}),
		getProduct: build.query({
			query: () => 'client/products',
			providesTags: ['Products'],
		}),
		getCustomers: build.query({
			query: () => 'client/customers',
			providesTags: ['Customers'],
		}),
		getTransactions: build.query({
			query: params => ({
				url: 'client/transactions',
				params: params,
			}),
			providesTags: ['Transactions'],
		}),
		getGeography: build.query({
			query: () => 'client/geography',
			providesTags: ['Geography'],
		}),
		getSales: build.query({
			query: () => 'sales/sales',
			providesTags: ['Sales'],
		}),
		getAdmins: build.query({
			query: () => 'management/admins',
			providesTags: ['Admins'],
		}),
		getPerformance: build.query({
			query: id => `management/performance/${id}`,
			providesTags: ['Performance'],
		}),
		getDashboard: build.query({
			query: () => 'general/dashboard',
			providesTags: ['Dashboard'],
		}),
	}),
})

export const {
	useGetUserQuery,
	useGetProductQuery,
	useGetCustomersQuery,
	useGetTransactionsQuery,
	useGetGeographyQuery,
	useGetSalesQuery,
	useGetAdminsQuery,
	useGetPerformanceQuery,
	useGetDashboardQuery,
} = api
