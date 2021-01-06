import React, { useState } from "react";

import {
  Grid,
  Typography,
  TextField,
  Dialog,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  createStyles,
  makeStyles,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "src/redux/store/store";
import { IUserState } from "src/redux/reducer/user.reducer";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { setSuccessNoti } from "src/redux/action/success.action";
import { ImageViewer } from "src/components/common";
import { addProduct, getAllProduct } from "src/redux/action/product.action";
import { IProductDetail } from "src/shared/type/product.type";

const useStyles = makeStyles((theme) =>
  createStyles({
    formControl: {
      width: "100%",
    },
  })
);
export interface ComponentProps {
  onClose: () => void;
  productDetail: IProductDetail;
}

interface StateProps {
  product_name: string;
  price: string;
  qty: string;
  image: any;
  description: string;
  values_1: any;
  values_2: any;
}

export type Props = ComponentProps;

export interface IField {
  label: string;
  value: string;
}

const EditProductField: IField[] = [
  {
    label: "Product Name",
    value: "product_name",
  },
  {
    label: "Price",
    value: "price",
  },
  {
    label: "Qty",
    value: "qty",
  },
  {
    label: "Description",
    value: "description",
  },
];

const EditProduct = (props: Props) => {
  const { onClose, productDetail } = props;
  const classes = useStyles();
  const [values, setValues] = useState<StateProps>({
    product_name: productDetail.product_name || "",
    price: productDetail.price || "",
    qty: productDetail.qty || "",
    image: productDetail.image || null,
    description: productDetail.description || "",
    values_1: "",
    values_2: "",
  });
  const dispatch = useDispatch();
  const user = useSelector<StoreState, IUserState>((state) => state.user);

  const onCreate = async () => {
    try {
      let formData = new FormData();
      formData.append("image", values.image);
      formData.append("product_name", values.product_name);
      formData.append("price", values.price);
      formData.append("qty", values.qty);
      formData.append("description", values.description);
      formData.append("values_1", values.values_1);
      formData.append("values_2", values.values_2);
      let result;
      if (values.image) {
        result = (await dispatch(addProduct(formData))) as any;
      } else {
        result = (await dispatch(addProduct(values))) as any;
      }
      if (Boolean(result)) {
        await dispatch(getAllProduct());
        dispatch(setSuccessNoti("Create Product Successfully"));
        onClose();
      }
    } catch (err) {}
  };

  return (
    <Dialog maxWidth={"md"} fullWidth={true} open={true} onClose={onClose}>
      <DialogTitle>
        <Typography className="dialog-form-title">Create Product</Typography>
      </DialogTitle>
      <DialogContent>
        <Grid container={true} spacing={2}>
          {EditProductField.map((field) => (
            <Grid item={true} xs={12} key={field.label}>
              <TextField
                label={field.label}
                variant="outlined"
                value={values[field.value as keyof StateProps]}
                fullWidth={true}
                margin="dense"
                required={true}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(event) => {
                  event.persist();
                  setValues({
                    ...values,
                    [field.value as keyof IField]: event.target.value,
                  });
                }}
              />
            </Grid>
          ))}
          <Grid item xs={12} style={{ marginTop: "10px" }}>
            <ImageViewer
              aspectRatio={4 / 3}
              onSave={(cropData: any) => {
                setValues({ ...values, image: cropData });
              }}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={onCreate} color="primary">
          Create
        </Button>
        <Button variant="outlined" onClick={onClose} color="secondary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default EditProduct;
