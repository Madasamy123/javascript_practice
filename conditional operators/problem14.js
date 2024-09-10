function dIMethod(teamScore, targetScore, overLeft)
{
    if(teamScore>=targetScore)
        {console.log("Team wins by DL method");}

    else if(teamScore<targetScore && overLeft>0)
    {console.log("Match to be continued");}

    else
    {console.log("Team loses by DL method");

    }
}