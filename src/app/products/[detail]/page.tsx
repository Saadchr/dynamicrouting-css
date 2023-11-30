type Params = {
  params: {
    detail: number;
  };
};

const page = ({ params }: Params) => {
  return <div>This is the product number {params.detail}</div>;
};

export default page;
