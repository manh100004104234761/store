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
import { INew } from "src/shared/type/new.type";
import { addNew, editNew, getAllNews } from "src/redux/action/new.action";

const useStyles = makeStyles((theme) =>
  createStyles({
    formControl: {
      width: "100%",
    },
  })
);
export interface ComponentProps {
  onClose: () => void;
  listNews: INew[];
  setListNews: any;
}

interface StateProps {
  title: string;
  short_content: string;
  content: string;
  // image: any;
}

export type Props = ComponentProps;

export interface IField {
  label: string;
  value: string;
}

const EditNewField: IField[] = [
  {
    label: "Title",
    value: "title",
  },
  {
    label: "Short Content",
    value: "short_content",
  },
  {
    label: "Content",
    value: "content",
  },
];

const AddNew = (props: Props) => {
  const { onClose, listNews, setListNews } = props;
  const classes = useStyles();
  const [values, setValues] = useState<StateProps>({
    title: "",
    short_content: "",
    content: "",
  });
  const dispatch = useDispatch();

  const onCreate = async () => {
    try {
      let result;
      // let formData = new FormData();
      // formData.append("image", values.image);
      // formData.append("title", values.title);
      // formData.append("short_content", values.short_content);
      // formData.append("content", values.content);
      // let result;
      // if (values.image) {
      //   let result: any = null;
      //   if (newDetail) {
      //     result = (await dispatch(editNew(formData))) as any;
      //   } else {
      //     result = (await dispatch(addNew(formData))) as any;
      //   }
      // } else {
      result = (await dispatch(addNew(values))) as any;
      // }
      if (result.status) {
        let result = (await dispatch(getAllNews())) as any;
        if (result.status) {
          setListNews(result.data);
        }
        dispatch(setSuccessNoti("Create New Successfully"));
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
          {EditNewField.map((field) => (
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
          {/* <Grid item xs={12} style={{ marginTop: "10px" }}>
            <ImageViewer
              aspectRatio={4 / 3}
              onSave={(cropData: any) => {
                setValues({ ...values, image: cropData });
              }}
            />
          </Grid> */}
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
export default AddNew;
