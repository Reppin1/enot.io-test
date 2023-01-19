import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Switch
} from "@mui/material";
import { ActionsObject, useNewsSubscribe, useUi } from "../../../store/global/global.store";

const SubscribeNewsDialog = () => {
  const { data: { newsSubscribeModal, newsSubscribe }, actions: newsSubscribeActions } = useNewsSubscribe();
  const { data: { runningLine }, actions: UiActions } = useUi();
  const { setRunningLine } = UiActions as ActionsObject['ui'];
  const { setOpenDialog, setNewsSubscribe } = newsSubscribeActions as ActionsObject['dialog'];

  return (
    <Dialog
      open={newsSubscribeModal}
      onClose={() => setOpenDialog(false)}
    >
      <DialogTitle>Subscribe News?</DialogTitle>
      <DialogContent>
        <Switch onChange={() => {
          setNewsSubscribe(!newsSubscribe)
          setRunningLine(!runningLine);
        }} checked={newsSubscribe} />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpenDialog(false)}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export { SubscribeNewsDialog };