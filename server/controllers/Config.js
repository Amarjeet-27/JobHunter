export let serverReady = false;
export const getServerStatus = () => {
  return serverReady;
};
export const SetServerReady = (value) => {
  serverReady = value;
};
