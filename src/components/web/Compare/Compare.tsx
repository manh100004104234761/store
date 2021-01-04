import React, { useEffect, useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { TextField, Typography } from "@material-ui/core";
import CardItem from "../../common/CardItem/CardItem";
import Button from "@material-ui/core/Button";
import Title from "../../common/Title/Title";
import {
  IProductDetail,
  IProductIDReq,
  IProductDetailRes,
} from "src/shared/type/product.type";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductDetail,
  getProductToCompare,
} from "src/redux/action/product.action";
import { comment } from "src/redux/action/user.action";
import { StoreState } from "src/redux/store/store";
import { IUserState } from "src/redux/reducer/user.reducer";
import { IProductState } from "src/redux/reducer/product.reducer";

interface Props {}

export default function Compare(props: Props) {
  const [Ishow, SetShow] = React.useState(true);

  const product = useSelector<StoreState, IProductState>(
    (state) => state.product
  );
  const handleSoSanh = async () => {
    SetShow(!Ishow);
  };
  return (
    <div>
      <Button onClick={handleSoSanh}>
        {!Ishow ? <div>Làm mới</div> : <div>So sánh</div>}
      </Button>
      <div>
        <div style={{ display: "flex", marginLeft: 556 }}>
          <div style={{ marginRight: 50 }}>
            <div>
              {!Ishow &&
              product.productsToCompare &&
              product.productsToCompare[
                product.productsToCompare?.length - 1
              ] ? (
                <div style={{ display: "flex", alignItems: "center" }}>
                  <h3>Tên Sản Phẩm:</h3>
                  <div>
                    {
                      product.productsToCompare[
                        product.productsToCompare?.length - 1
                      ].product_name
                    }
                  </div>
                </div>
              ) : null}
            </div>
            <div>
              {!Ishow &&
              product.productsToCompare &&
              product.productsToCompare[
                product.productsToCompare?.length - 1
              ] ? (
                product.productsToCompare[
                  product.productsToCompare?.length - 1
                ].values?.map((value) => (
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <h3>{value.name}:</h3>
                    <h2>{value.value}</h2>
                  </div>
                ))
              ) : (
                <div>Khong co gi o day ca</div>
              )}
            </div>
          </div>
          <div>
            {!Ishow &&
            product.productsToCompare &&
            product.productsToCompare[product.productsToCompare?.length - 2] ? (
              <div style={{ display: "flex", alignItems: "center" }}>
                <h3>Tên Sản Phẩm:</h3>
                <div>
                  {
                    product.productsToCompare[
                      product.productsToCompare?.length - 2
                    ].product_name
                  }
                </div>
              </div>
            ) : null}
          </div>
          {!Ishow &&
          product.productsToCompare &&
          product.productsToCompare[product.productsToCompare?.length - 2] ? (
            product.productsToCompare[
              product.productsToCompare?.length - 2
            ].values?.map((value) => (
              <div style={{ display: "flex", alignItems: "center" }}>
                <h3>{value.name}:</h3>
                <h2>{value.value}</h2>
              </div>
            ))
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}
