import styled from 'styled-components'
import { breakPoints } from '../../utils/breakPoints'

export const HeroWrapper = styled.section`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  .hero-buttons{
    margin-top: 20px;
    display: flex;
    align-items: center;
    gap: 5px;
    > span{
      :first-child{
        border: solid var(--color-secondary) 1px;
        color: var(--color-secondary);
        :hover{
          color: white;
          background: var(--color-secondary);
        }
      }
      :last-child{
        background: rgb(31,66,32);
        background: linear-gradient(-90deg, rgba(31,66,32,1) 0%, rgba(53,122,56,1) 100%);        
        color: white;
        border: solid var(--color-main) 1px;
        opacity: 1;
        :hover{
          opacity: 0.8;
        }
      }
    }
  }
  img{
    width: 500px;
    @media ${breakPoints.xl}{
      width: 350px;
    }
  }

`