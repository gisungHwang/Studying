
#include "pch.h"
#include <list>
#include <string>
#include <stdio.h>

#include "CEvent.h"
#include "CEventMgr.h"
#include "CEventMove.h"


using namespace std;

CEventMove::CEventMove()
{

	m_Targat = "�̵��ϰڽ��ϴ�.";
}


CEventMove::~CEventMove()
{
}


void CEventMove::doExec()
{
	printf("\n doExec : CEventMove   \n");
	printf("%s  \n", m_Targat);

}

