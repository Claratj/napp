import { useQuery } from '@tanstack/react-query';
import productsRepository from 'src/repositories/products.repository';

export function useListProductsQuery(args) {
	return useQuery(['products', 'list'], () => productsRepository.list(args));
}

export function useDetailsCardsQuery(id) {
	return useQuery(['products', 'details', id], () => productsRepository.details(id));
}

export function useAddToCartProductQuery(payload) {
	return useQuery(['products', 'add', payload], () => productsRepository.add(payload));
}
