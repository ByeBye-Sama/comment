import { useQuery} from '@apollo/react-hooks';
import { ALL_COMMENTS } from './comment.service'

export default () => useQuery(ALL_COMMENTS);
