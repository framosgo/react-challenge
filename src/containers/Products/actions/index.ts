import { ProductActionTypes } from '../actionTypes';
import { Action, Product } from '../../../types';

export type ProductActions = Action<ProductActionTypes, Product[]>;
