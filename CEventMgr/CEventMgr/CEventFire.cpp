#include "pch.h"
#include <stdio.h>

#include "CEvent.h"
#include "CEventMove.h"

#include "CEventMgr.h"
#include "CEventFire.h"

CEventFire::CEventFire()
{
	int m_Number = 10;

}


CEventFire::~CEventFire()
{
}

void CEventFire::doExec()
{

	printf("총 %d발의 탄을 사용했습니다 \n ", m_Number);
}


