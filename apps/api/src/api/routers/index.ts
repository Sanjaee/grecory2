import express, { Router } from 'express';
import ProductRouter from '../product/ProductRouter';
import UsersRouters from '../users/UsersRouters';
import AuthRouters from '../auth/AuthRouters';
import RoleRouters from '../auth/role/RoleRouters';
import CartRouters from '../Cart/cartRouter';
import CityRoutes from '../rajaongkir/city';
import CostRoutes from '../rajaongkir/cost';
import MidtransRoutes from '../Checkout/midtrans';

const router = Router();

router.use(express.json());
router.use('*/image', express.static('src/public/image'));

router.use('/product', ProductRouter);
router.use('/role', RoleRouters);
router.use('/register', UsersRouters);
router.use('/auth', AuthRouters);
router.use('/cart', CartRouters);
router.use('/city', CityRoutes);
router.use('/cost', CostRoutes);
router.use('/midtrans', MidtransRoutes);

export default router;
