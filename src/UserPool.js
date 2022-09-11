import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: 'us-east-1_vNLiXTvvP',
    ClientId: '6uc1o14ssh5f801vd957n3siuu'
}

export default new CognitoUserPool(poolData);