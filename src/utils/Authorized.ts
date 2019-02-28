import antTsPro from 'ant-ts-pro';
import { getAuthority } from './authority';

const { RenderAuthorized }: any = antTsPro;
let Authorized = RenderAuthorized(getAuthority()); // eslint-disable-line

// Reload the rights component
const reloadAuthorized = () => {
  Authorized = RenderAuthorized(getAuthority());
};

export { reloadAuthorized };
export default Authorized;
