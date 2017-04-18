/**
 * Created by iZel on 4/9/17.
 */
import { Auth } from './auth.service';
import { AuthGuard } from './auth.guard';

export let SegurityService = [Auth, AuthGuard ];
