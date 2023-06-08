import { styled } from '@mui/material/styles';
import { IconButton, Stack } from "@mui/material";

export const MenuButton = styled(IconButton)(
    ({ theme }) => ({
        [theme.breakpoints.down('md')]: {
            display: 'inline-flex'
        },
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    })
)

export const OnlyDesktop = styled(Stack)(
    ({ theme }) => ({
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
        [theme.breakpoints.up('md')]: {
            display: 'flex'
        }
    })
)