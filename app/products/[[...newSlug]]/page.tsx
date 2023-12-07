import React from "react";

type Props = {
  params: { newSlug: string[] };
  searchParams: { sortOrder: string };
};

const ProductPage = ({
  params: { newSlug },
  searchParams: { sortOrder },
}: Props) => {
  return (
    <div>
      ProductPage {newSlug}, {sortOrder}
    </div>
  );
};

export default ProductPage;
