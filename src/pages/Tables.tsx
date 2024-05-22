import Breadcrumb from '../components/AdminComponents/Breadcrumbs/Breadcrumb';
import TableOne from '../components/AdminComponents/Tables/TableOne';
import TableThree from '../components/AdminComponents/Tables/TableThree';
import TableTwo from '../components/AdminComponents/Tables/TableTwo';
import DefaultLayout from '../layout/DefaultLayout';

const Tables = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Tables" />

      <div className="flex flex-col gap-10">
        <TableOne />
        <TableTwo />
        <TableThree />
      </div>
    </DefaultLayout>
  );
};

export default Tables;
