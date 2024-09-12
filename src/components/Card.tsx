import { FC } from 'react';

const Card: FC<{
  icon: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
}> = ({ icon, title, description }) => {
  return (
    <div className="rounded-md border border-stroke bg-white py-6 px-7.5 w-72 mx-3 my-3 shadow-default duration-300 hover:scale-105 dark:border-strokedark dark:bg-boxdark">
      <div className="flex h-20 w-20 mx-auto items-center justify-center">
        {icon}
      </div>

      <div className="mt-8 mb-3 flex items-end justify-center text-center">
        <div>
          <h4 className="text-title-md mb-5 font-bold text-black dark:text-white">
            {title}
          </h4>
          <span className="font-medium">{description}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
