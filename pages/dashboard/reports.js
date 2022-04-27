import { getLayout } from '@/layouts/dashboard';
import {Reports} from "@/components/screens/reports";

const DashboardReports = () => <Reports/>;

DashboardReports.getLayout = getLayout;

export default DashboardReports;
